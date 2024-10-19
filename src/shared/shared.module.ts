import { Module } from '@nestjs/common';

import { CommonSharedModule } from '@/shared/common-shared/common-shared.module';


@Module({

  imports: [CommonSharedModule],
  providers: [
  
  ],
  exports: [
    CommonSharedModule
  ],
})
export class SharedModule {

}
