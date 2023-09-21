export class SingletonGuard {
  constructor(module: any) {
    if (module) {
      throw new Error(`${module.constructor.name} has already been loaded.`);
    }
  }
}
