import { NgModule } from '@angular/core';
import { CnpjPipe } from './cnpj/cnpj';
import { TelefonePipe } from './telefone/telefone';
import { EnderecoPipe } from './endereco/endereco';
import { CepPipe } from './cep/cep';

@NgModule({
	declarations: [
        CnpjPipe,
        TelefonePipe,
        EnderecoPipe,
        CepPipe,
    ],
	imports: [],
	exports: [
        CnpjPipe,
        TelefonePipe,
        EnderecoPipe,
        CepPipe,
    ]
})
export class PipesModule {}
