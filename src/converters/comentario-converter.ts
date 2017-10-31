import { Converter } from "./converter";
import { Comentario } from "../model/comentario";
import { ListConverter } from "./list-converter";

export class ComentarioConverter extends ListConverter<Comentario> implements Converter<Comentario> {

    convert(dados: any, uid?: string): Comentario {
        let comentario: Comentario = new Comentario();
        comentario.uidDistribuidor = dados.uidDistribuidor;
        comentario.nomeDistribuidor = dados.nomeDistribuidor;
        comentario.uidCliente = dados.uidCliente;
        comentario.nomeCliente = dados.nomeCliente;
        comentario.uidPedido = dados.uidPedido;
        comentario.avaliacaoPedido = dados.avaliacaoPedido;
        comentario.dataComentario = new Date(dados.dataComentario);
        comentario.textoComentario = dados.comentario;
        return comentario;
    }

}