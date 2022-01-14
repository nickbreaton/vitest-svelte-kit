import path from "path"
import { pathToFileURL } from "url"

export function resolveEsmPath(...paths) {
    return pathToFileURL(path.resolve(...paths)).href
}
