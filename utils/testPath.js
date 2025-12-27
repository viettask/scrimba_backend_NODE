import path from 'node:path'

export function testPath(dir) {

  const absPathToResource = path.join(dir, 'public', 'index.html')
  console.log('testPath: ', absPathToResource)
}