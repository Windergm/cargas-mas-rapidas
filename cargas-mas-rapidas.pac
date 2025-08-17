function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    // Conexión directa para archivos multimedia (video, audio, imágenes) y archivos descargables grandes
    if (
        // Video
        shExpMatch(url, "*.mp4")   || shExpMatch(url, "*.mkv")   || shExpMatch(url, "*.avi")  ||
        shExpMatch(url, "*.mov")   || shExpMatch(url, "*.webm")  || shExpMatch(url, "*.flv")  ||
        shExpMatch(url, "*.wmv")   || shExpMatch(url, "*.mpeg")  || shExpMatch(url, "*.mpg")  ||
        shExpMatch(url, "*.3gp")   || shExpMatch(url, "*.mts")   || shExpMatch(url, "*.m4v")  ||
        shExpMatch(url, "*.ts")    || shExpMatch(url, "*.vob")   || shExpMatch(url, "*.rm")   ||
        // Audio
        shExpMatch(url, "*.mp3")   || shExpMatch(url, "*.flac")  || shExpMatch(url, "*.wav")  ||
        shExpMatch(url, "*.ogg")   || shExpMatch(url, "*.aac")   || shExpMatch(url, "*.m4a")  ||
        shExpMatch(url, "*.wma")   || shExpMatch(url, "*.aiff")  || shExpMatch(url, "*.au")   ||
        shExpMatch(url, "*.mid")   || shExpMatch(url, "*.rmi")   || shExpMatch(url, "*.oga")  ||
        shExpMatch(url, "*.opus")  ||
        // Imágenes
        shExpMatch(url, "*.jpg")   || shExpMatch(url, "*.jpeg")  || shExpMatch(url, "*.png")  ||
        shExpMatch(url, "*.gif")   || shExpMatch(url, "*.webp")  || shExpMatch(url, "*.svg")  ||
        shExpMatch(url, "*.bmp")   || shExpMatch(url, "*.ico")   || shExpMatch(url, "*.tiff") ||
        shExpMatch(url, "*.tif")   || shExpMatch(url, "*.jfif")  || shExpMatch(url, "*.pjpeg")||
        shExpMatch(url, "*.pjp")   ||
        // Archivos descargables grandes
        shExpMatch(url, "*.zip")   || shExpMatch(url, "*.rar")   || shExpMatch(url, "*.7z")   ||
        shExpMatch(url, "*.tar")   || shExpMatch(url, "*.gz")    || shExpMatch(url, "*.iso")  ||
        shExpMatch(url, "*.exe")   || shExpMatch(url, "*.msi")   ||
        // Documentos comunes
        shExpMatch(url, "*.pdf")
    ) {
        return "DIRECT";
    }
    // Reglas de proxy específicas por dominio
    if (dnsDomainIs(host, "adobe.com")) return "PROXY 102.129.178.6:4414";
    if (dnsDomainIs(host, "perplexity.ai") || dnsDomainIs(host, "artlist.io")) return "PROXY 96.62.127.25:50100";
    if (dnsDomainIs(host, "chatgpt.com")) return "PROXY 91.132.124.97:8080";
    if (dnsDomainIs(host, "freepik.com") || dnsDomainIs(host, "freepik.es")) return "PROXY 14.102.232.254:50100";
    if (dnsDomainIs(host, "placeit.net")) return "PROXY 161.123.54.112:5496";
    if (dnsDomainIs(host, "canva.com")) return "PROXY 93.177.95.214:8080";
    if (dnsDomainIs(host, "platzi.com")) return "PROXY 14.102.232.254:50100";
    if (dnsDomainIs(host, "crehana.com")) return "PROXY 193.233.210.11:8080";
    if (dnsDomainIs(host, "cloud.microsoft")) return "PROXY 14.102.232.254:50100";
    if (dnsDomainIs(host, "creativefabrica.com")) return "PROXY 148.135.147.24:6534";
    if (dnsDomainIs(host, "motionarray.com")) return "PROXY 14.102.232.254:50100";
    if (dnsDomainIs(host, "envato.com")) return "PROXY 14.102.232.254:50100";
    // Todo lo demás va directo
    return "DIRECT";
}
