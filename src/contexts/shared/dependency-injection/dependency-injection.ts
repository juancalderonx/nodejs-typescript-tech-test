import { Injectable as NestJsInjectable } from '@nestjs/common';

/**
 * Injectable decorator to be used in classes that should be injected by NestJS.
 * @returns A class that NestJS can inject.
 */
export function Injectable() {
  return NestJsInjectable();
}
