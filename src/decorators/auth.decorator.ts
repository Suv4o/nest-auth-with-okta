import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { OktaGuard } from '../guards/auth.guard';

export function Auth(...permissions: string[]) {
  return applyDecorators(
    SetMetadata('permissions', permissions),
    UseGuards(OktaGuard),
  );
}
