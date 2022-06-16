//template fuction 
const cardWrapper = (cards) =>`
<!DOCTYPE html> 
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewpoint" consent="width+device-width, initail-cale=1.0">
                <title>Team Profiles</title>
                <!-- Bootstrap -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
                <!-- Font Awesome -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/>
                </meta>
        </meta>
    </head>
    <body class="pb-5">
        
        <!-- header -->
        <header class="bg-danger py-4 mb-5">
            <h1 class="text-center text-white">
                <i class="fas fa-users mr-1"></i>
                Team Profile
            </h1>
        </header>
        <!-- Profile container -->
        <main>
            <div class="container">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        ${cards}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>
    `;

    module.exports = cardWrapper;