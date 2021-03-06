<?php
    $path_info = parse_path();
    $name = $path_info['call_parts'][0];
    $top = urldecode($path_info['call_parts'][1]);
    $bottom = urldecode($path_info['call_parts'][2]);
    $colorsApiUrl = "http://www.colourlovers.com/api/palettes/random?format=json";
    $colorsJson = file_get_contents($colorsApiUrl);
    $colorsObj = json_decode($colorsJson);

    function parse_path() {
        $path = array();

        if (isset($_SERVER['REQUEST_URI'])) {
            $request_path = explode('?', $_SERVER['REQUEST_URI']);

            $path['base'] = rtrim(dirname($_SERVER['SCRIPT_NAME']), '\/');
            $path['call_utf8'] = substr(urldecode($request_path[0]), strlen($path['base']) + 1);
            $path['call'] = utf8_decode($path['call_utf8']);
            if ($path['call'] == basename($_SERVER['PHP_SELF'])) {
                $path['call'] = '';
            }
            $path['call_parts'] = explode('/', $path['call_utf8']);
        }
        return $path;
    }

    if(!isset($top) || empty($top)) {
        $top = "Cliquez ici pour modifier";
    } 

    if(!isset($bottom) || empty($bottom)) {
        $bottom = "Cliquez ici pour modifier";
    } 

    if(!isset($name) || empty($name) ) {
        $name = "simon-arnold";
        $top = "404";
        $bottom = "C'est ça faute ↑";
    }
?>
<!doctype html>
<html lang="fr">
<head>
    <!-- Metas -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?= ucfirst($name) ?> Meme</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="author" content="Simon Arnold">
    <link type="text/plain" rel="author" href="./humans.txt" />
    
    <!-- Opengraph / Twitter card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@smnarnold" />
    <meta property="og:title" name="twitter:title" content="<?= ucfirst($name) ?>" />
    <meta property="og:description" name="twitter:description" content="<?= ucfirst($top) ?>... <?= $bottom ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:image" name="twitter:image" content="/assets/img/share-img/<?= strtolower($name) ?>.jpg" />
    <meta property="og:url" content="http://meme.smnarnold.com/<?= $name ?>/<?= $top ?>/<?= $bottom ?>" />
    
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/assets/img/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/assets/img/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/assets/img/favicons/manifest.json">
    <link rel="mask-icon" href="/assets/img/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/assets/img/favicons/favicon.ico">
    <meta name="msapplication-config" content="/assets/img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/main.css?v=imglxy7qfhgg"/>
    <style>
        .slide:nth-child(1) { background-color: #<?= $colorsObj[0]->colors[0] ?>; }
        .slide:nth-child(2) { background-color: #<?= $colorsObj[0]->colors[1] ?>; }
        .slide:nth-child(3) { background-color: #<?= $colorsObj[0]->colors[2] ?>; }
        .slide:nth-child(4) { background-color: #<?= $colorsObj[0]->colors[3] ?>; }
        .slide:nth-child(5) { background-color: #<?= $colorsObj[0]->colors[4] ?>; }

        .picture { background-image: url(/assets/img/<?= strtolower($name) ?>.png); }
    </style>
</head>

<body data-name="<?= strtolower($name) ?>" data-top="<?= $top ?>" data-bottom="<?= $bottom ?>">
    <div class="bg">
        <span class="slide"></span>
        <span class="slide"></span>
        <span class="slide"></span>
        <span class="slide"></span>
        <span class="slide"></span>
    </div>

    <header class="text top" contenteditable="true"><?= $top ?></header>

    <div class="picture <?= strtolower($name) ?>"></div>

    <footer class="text bottom" contenteditable="true"><?= $bottom ?></footer>

    <!-- Boot -->
    <script src="/assets/js/main.js"></script>
    
    <!-- Analytics -->
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-37943713-4', 'auto');
      ga('send', 'pageview');
    </script>
</body>
</html>