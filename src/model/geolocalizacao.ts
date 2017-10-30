export class Geolocalizacao {

    latitude: number;
    longitude: number;

    static RAIO: number = 6373;

    getDistancia(outra: Geolocalizacao): number {
        if (!outra)
            return null;
            
        let latARad = this.latitude * (Math.PI/180);
        let lonARad = this.longitude * (Math.PI/180);
        let latBRad = outra.latitude * (Math.PI/180);
        let lonBRad = outra.longitude * (Math.PI/180);

        let dLon = lonBRad - lonARad;
        let dLat = latBRad - latARad;

        let a1 = Math.pow(Math.sin(dLat / 2), 2);
        let a2 = Math.cos(latARad) * Math.cos(latBRad);
        let a3 = Math.pow(Math.sin(dLon / 2), 2);
        let a = a1 + a2 * a3;

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = Geolocalizacao.RAIO * c;
        return Math.round(d * 1000) / 1000;
    }

}