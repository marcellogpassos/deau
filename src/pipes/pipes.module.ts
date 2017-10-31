import { NgModule } from '@angular/core';
import { CnpjPipe } from './cnpj/cnpj';
import { TelefonePipe } from './telefone/telefone';
import { EnderecoPipe } from './endereco/endereco';
import { CepPipe } from './cep/cep';
import { MediaAvaliacoesPipe } from './media-avaliacoes/media-avaliacoes';

@NgModule({
	declarations: [
        CnpjPipe,
        TelefonePipe,
        EnderecoPipe,
        CepPipe,
        MediaAvaliacoesPipe,
    ],
	imports: [],
	exports: [
        CnpjPipe,
        TelefonePipe,
        EnderecoPipe,
        CepPipe,
        MediaAvaliacoesPipe,
    ]
})
export class PipesModule {}
