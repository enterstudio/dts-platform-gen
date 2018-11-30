import {tsquery} from "@phenomnomnominal/tsquery"
import { existsSync, readFileSync } from "fs"
import { dirname, join } from "path"
import { collapseTextChangeRangesAcrossMultipleVersions, ExportDeclaration } from "typescript"

export const getExportsForFile = (path: string) => {
  console.log("read >", path)
  const content = readFileSync(path, "utf8")
  return getExports(content)
}

export const getExports = (content: string) =>
tsquery<ExportDeclaration>(content, "ExportDeclaration")

interface TreeNode {
  /** Exports for this node */
  exports: ExportDeclaration[]
  /** All platforms supported from this node and through its children  */
  platforms: string[]
  /** You start without children */
  children?: TreeNode[]
  /** The node that imported it */
  parent: TreeNode | undefined
  /** Depth, makes it easier to print */
  depth: number
  /** The filepath for this node */
  path: string
}

const root = "examples/palette/2.23.0"
const platforms = ["ios"]

const resolvePath = (parent: TreeNode, path: string) => {
  const parentDir = dirname(parent.path)
  for (const platformPrefix of parent.platforms) {
    const index = join(parentDir, path, platformPrefix + "index.d.ts")
    if (existsSync(index)) {
      return index
    }

    const named = join(parentDir,  path + platformPrefix +  ".d.ts")
    if (existsSync(named)) {
      return named
    }
  }

  throw new Error(`Could not resolve ${path} from ${parent.path}`)
}

const createTree = (platforms: string[], path: string, parent?: TreeNode): TreeNode => {
  const fileExports = getExportsForFile(path)

  const node: TreeNode = {
    path,
    parent,
    exports: fileExports,
    platforms,
    depth: parent ? parent.depth + 1 : 0,
  }

  node.children = fileExports.filter(e => e.moduleSpecifier).map(e => {
    const childPathString = e.moduleSpecifier!.getText()
    const childPath = childPathString.substring(1, childPathString.length - 1)

    const newFilePath = resolvePath(node, childPath)

    return createTree(platforms, newFilePath, node)
  })

  return node
}

const printTree = (node: TreeNode) => {
  for (let index = 0; index < node.depth; index++) {
    process.stdout.write(" ")
  }
  // tslint:disable-next-line:no-console
  console.log(node.path)
  node.children!.forEach(childNode => {
    printTree(childNode)
  })
}

export const runner = () => {
  const path = join(root, "index.d.ts")
  const rootNodeNoPlatform = createTree([""], path)
  const rootNodeiOSPlatform = createTree([".ios", ""], path)

  console.log("Root tree resolving like node js")
  printTree(rootNodeNoPlatform)

  console.log("\n\n\nRoot tree resolving like RN iOS")
  printTree(rootNodeiOSPlatform)
  // console.log(rootNode.exports.map(e => e.moduleSpecifier && e.moduleSpecifier.getText()))
  //
  // https://tsquery-playground.firebaseapp.com

}

if (!module.parent) {
  runner()
}
