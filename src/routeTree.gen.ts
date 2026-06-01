import { Route as rootRouteImport } from './routes/__root'
import { Route as ResourcesRouteImport } from './routes/resources'
import { Route as MembersRouteImport } from './routes/members'
import { Route as MediaRouteImport } from './routes/media'
import { Route as LawsRouteImport } from './routes/laws'
import { Route as LaborRouteImport } from './routes/labor'
import { Route as InteractiveRouteImport } from './routes/interactive'
import { Route as HistoryRouteImport } from './routes/history'
import { Route as GadRouteImport } from './routes/gad'
import { Route as FamilyRouteImport } from './routes/family'
import { Route as AcademeRouteImport } from './routes/academe'
import { Route as IndexRouteImport } from './routes/index'

const ResourcesRoute = ResourcesRouteImport.update({
  id: '/resources',
  path: '/resources',
  getParentRoute: () => rootRouteImport,
} as any)
const MembersRoute = MembersRouteImport.update({
  id: '/members',
  path: '/members',
  getParentRoute: () => rootRouteImport,
} as any)
const MediaRoute = MediaRouteImport.update({
  id: '/media',
  path: '/media',
  getParentRoute: () => rootRouteImport,
} as any)
const LawsRoute = LawsRouteImport.update({
  id: '/laws',
  path: '/laws',
  getParentRoute: () => rootRouteImport,
} as any)
const LaborRoute = LaborRouteImport.update({
  id: '/labor',
  path: '/labor',
  getParentRoute: () => rootRouteImport,
} as any)
const InteractiveRoute = InteractiveRouteImport.update({
  id: '/interactive',
  path: '/interactive',
  getParentRoute: () => rootRouteImport,
} as any)
const HistoryRoute = HistoryRouteImport.update({
  id: '/history',
  path: '/history',
  getParentRoute: () => rootRouteImport,
} as any)
const GadRoute = GadRouteImport.update({
  id: '/gad',
  path: '/gad',
  getParentRoute: () => rootRouteImport,
} as any)
const FamilyRoute = FamilyRouteImport.update({
  id: '/family',
  path: '/family',
  getParentRoute: () => rootRouteImport,
} as any)
const AcademeRoute = AcademeRouteImport.update({
  id: '/academe',
  path: '/academe',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/academe': typeof AcademeRoute
  '/family': typeof FamilyRoute
  '/gad': typeof GadRoute
  '/history': typeof HistoryRoute
  '/interactive': typeof InteractiveRoute
  '/labor': typeof LaborRoute
  '/laws': typeof LawsRoute
  '/media': typeof MediaRoute
  '/members': typeof MembersRoute
  '/resources': typeof ResourcesRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/academe': typeof AcademeRoute
  '/family': typeof FamilyRoute
  '/gad': typeof GadRoute
  '/history': typeof HistoryRoute
  '/interactive': typeof InteractiveRoute
  '/labor': typeof LaborRoute
  '/laws': typeof LawsRoute
  '/media': typeof MediaRoute
  '/members': typeof MembersRoute
  '/resources': typeof ResourcesRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/academe': typeof AcademeRoute
  '/family': typeof FamilyRoute
  '/gad': typeof GadRoute
  '/history': typeof HistoryRoute
  '/interactive': typeof InteractiveRoute
  '/labor': typeof LaborRoute
  '/laws': typeof LawsRoute
  '/media': typeof MediaRoute
  '/members': typeof MembersRoute
  '/resources': typeof ResourcesRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/academe'
    | '/family'
    | '/gad'
    | '/history'
    | '/interactive'
    | '/labor'
    | '/laws'
    | '/media'
    | '/members'
    | '/resources'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/academe'
    | '/family'
    | '/gad'
    | '/history'
    | '/interactive'
    | '/labor'
    | '/laws'
    | '/media'
    | '/members'
    | '/resources'
  id:
    | '__root__'
    | '/'
    | '/academe'
    | '/family'
    | '/gad'
    | '/history'
    | '/interactive'
    | '/labor'
    | '/laws'
    | '/media'
    | '/members'
    | '/resources'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AcademeRoute: typeof AcademeRoute
  FamilyRoute: typeof FamilyRoute
  GadRoute: typeof GadRoute
  HistoryRoute: typeof HistoryRoute
  InteractiveRoute: typeof InteractiveRoute
  LaborRoute: typeof LaborRoute
  LawsRoute: typeof LawsRoute
  MediaRoute: typeof MediaRoute
  MembersRoute: typeof MembersRoute
  ResourcesRoute: typeof ResourcesRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/resources': {
      id: '/resources'
      path: '/resources'
      fullPath: '/resources'
      preLoaderRoute: typeof ResourcesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/members': {
      id: '/members'
      path: '/members'
      fullPath: '/members'
      preLoaderRoute: typeof MembersRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/media': {
      id: '/media'
      path: '/media'
      fullPath: '/media'
      preLoaderRoute: typeof MediaRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/laws': {
      id: '/laws'
      path: '/laws'
      fullPath: '/laws'
      preLoaderRoute: typeof LawsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/labor': {
      id: '/labor'
      path: '/labor'
      fullPath: '/labor'
      preLoaderRoute: typeof LaborRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/interactive': {
      id: '/interactive'
      path: '/interactive'
      fullPath: '/interactive'
      preLoaderRoute: typeof InteractiveRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/history': {
      id: '/history'
      path: '/history'
      fullPath: '/history'
      preLoaderRoute: typeof HistoryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/gad': {
      id: '/gad'
      path: '/gad'
      fullPath: '/gad'
      preLoaderRoute: typeof GadRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/family': {
      id: '/family'
      path: '/family'
      fullPath: '/family'
      preLoaderRoute: typeof FamilyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/academe': {
      id: '/academe'
      path: '/academe'
      fullPath: '/academe'
      preLoaderRoute: typeof AcademeRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AcademeRoute: AcademeRoute,
  FamilyRoute: FamilyRoute,
  GadRoute: GadRoute,
  HistoryRoute: HistoryRoute,
  InteractiveRoute: InteractiveRoute,
  LaborRoute: LaborRoute,
  LawsRoute: LawsRoute,
  MediaRoute: MediaRoute,
  MembersRoute: MembersRoute,
  ResourcesRoute: ResourcesRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
