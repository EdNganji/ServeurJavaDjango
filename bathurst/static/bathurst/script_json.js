$(document).ready(function(){

    var url = 'https://api.linkpreview.net'
    var apiKey = '5b578yg9yvi8sogirbvegoiufg9v9g579gviuiub8'

    $("#hidd").hide(); 


        $.getJSON( "json_data.json", function(obj) { //lecture du fichier texte json

            $.each (obj, function(key, data) { // on remplace les textes masquées des valeurs par les valeurs du fichier json
                $(".mask1").text(data.tempet);  
                $(".mask2").text(data.humid);
                $(".mask3").text(data.press);
                $(".mask4").text(data.altitude);
            });

        });

        $("#Montreal").mouseleave(function() {

            $.getJSON( "json_data.json", function(obj) { //lecture du fichier texte json

                $.each (obj, function(key, data) { // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
    
            });
        });

        $("#Toronto").mouseleave(function() {

            $.getJSON( "json_data.json", function(obj) { //lecture du fichier texte json

                $.each (obj, function(key, data) { // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
    
            });

        });
        
        $("#Fredericton").mouseleave(function() {

           $.getJSON( "json_data.json", function(obj) { //lecture du fichier texte json

                $.each (obj, function(key, data) { // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
    
            });

        });

        $("#Halifax").mouseleave(function() {

            $.getJSON( "json_data.json", function(obj) { //lecture du fichier texte json

                $.each (obj, function(key, data) { // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
    
            });

        });



        $("#Montreal").mouseenter(function() {

            $("#hidd").show(); 
            $("#titre").text(text="Montreal");  
            $("#para").text(text="Montreal Montréal est une ville cosmopolite située dans la province de Québec, au Canada. C'est la deuxième plus grande ville du pays et le principal centre économique de la province." +

            "La ville est connue pour son histoire riche et sa culture vibrante, avec une architecture fascinante, une cuisine variée et des festivals tout au long de l'année. Montréal est également un important centre universitaire et de recherche, avec plusieurs grandes universités et instituts de recherche." +
            
            "Les habitants de Montréal sont reconnus pour leur convivialité et leur esprit festif. La ville offre également de nombreuses attractions pour les visiteurs, notamment le Vieux-Montréal, le Mont-Royal, le Musée des beaux-arts de Montréal, la Biosphère et bien plus encore." +
            
            "En somme, Montréal est une ville dynamique et culturelle qui offre une riche histoire, une vie nocturne animée, une scène gastronomique dynamique et de nombreuses activités pour les visiteurs et les résidents.");  

            $.getJSON( "json_data2.json", function(obj) { //lecture du fichier texte json
                $.each (obj, function(key, data) {  // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
            });

        });

        $("#Toronto").mouseenter(function() {

            $("#hidd").show(); 
            $("#titre").text(text="Toronto");  
            $("#para").text(text="Toronto est la plus grande ville du Canada et la capitale de la province de l'Ontario. C'est un centre économique et culturel important pour le pays, avec une population diversifiée et multiculturelle. " +

            "La ville est connue pour son architecture moderne, son impressionnante ligne d'horizon, ses attractions touristiques populaires telles que la Tour CN, les îles de Toronto et le Musée royal de l'Ontario. Toronto offre également une grande variété de restaurants, bars, boutiques et lieux de divertissement." +
            
            "Toronto est également un centre éducatif important avec plusieurs grandes universités et établissements d'enseignement supérieur. La ville est également un hub pour les entreprises de technologie et de finance, ainsi que pour les industries créatives." +
            
            "En somme, Toronto est une ville cosmopolite et dynamique avec une riche histoire, une scène culturelle vibrante, une vie nocturne animée, et une grande variété d'activités pour les visiteurs et les résidents.");  
            
            $.getJSON( "json_data2.json", function(obj) { //lecture du fichier texte json
                $.each (obj, function(key, data) {  // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
            });
        });
        
        $("#Fredericton").mouseenter(function() {

            $("#hidd").show(); 
            $("#titre").text(text="Fredericton");  
            $("#para").text(text="Fredericton est la capitale de la province du Nouveau-Brunswick, au Canada. La ville est située sur la rivière Saint-Jean et offre un cadre naturel magnifique, avec des parcs et des sentiers de randonnée." +

            "La ville est connue pour son charme historique, avec des bâtiments en briques rouges et des rues bordées d'arbres. Fredericton possède également une scène culturelle vibrante avec des festivals, des musées et des galeries d'art." +
            
            "Fredericton est également un centre éducatif important, avec l'Université du Nouveau-Brunswick et le Collège du Nouveau-Brunswick, ainsi qu'un centre de recherche et d'innovation." +
            
            "La ville offre également une grande variété de restaurants, de boutiques et d'autres lieux de divertissement pour les visiteurs et les résidents." +
            
            "En somme, Fredericton est une ville historique et charmante, avec une vie culturelle vibrante, une éducation de qualité et un cadre naturel magnifique");  

            $.getJSON( "json_data2.json", function(obj) { //lecture du fichier texte json
                $.each (obj, function(key, data) {  // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
            });
        });

        $("#Halifax").mouseenter(function() {

            $("#hidd").show(); 
            $("#titre").text(text="Halifax");  
            $("#para").text(text="Halifax est une ville portuaire située dans la province de la Nouvelle-Écosse, au Canada. C'est la plus grande ville de la région et un centre économique important pour la province." +

            "La ville est connue pour son histoire maritime, son rôle important pendant la Première et la Seconde Guerre mondiale, ainsi que pour ses célèbres musées et monuments. Halifax possède également une riche vie culturelle, avec de nombreux festivals et événements tout au long de l'année." +
            
            "La ville offre également une belle qualité de vie, avec des espaces verts, des parcs, des plages, des sentiers de randonnée et des pistes cyclables. Halifax possède également une scène gastronomique dynamique avec une grande variété de restaurants et de cuisines à découvrir." +
            
            "En somme, Halifax est une ville historique, culturelle et dynamique qui offre une belle qualité de vie et de nombreuses opportunités pour les visiteurs et les résidents.");  
            
            $.getJSON( "json_data2.json", function(obj) { //lecture du fichier texte json
                $.each (obj, function(key, data) { // on remplace les textes masquées des valeurs par les valeurs du fichier json
                    $(".mask1").text(data.tempet);  
                    $(".mask2").text(data.humid);
                    $(".mask3").text(data.press);
                    $(".mask4").text(data.altitude);
                });
            });
        });

        $("#Carouss").mouseenter(function() {

            $("#hidd").hide(100); 
            
        });



    

    //setTimeout(() => { // fonction de mise à jour automatique de la page web
     //  document.location.reload();
      // }, 3000);


});