let mymap = L.map('mapid').setView([38.04, -84.515], 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiZG5lbGxpcyIsImEiOiJjam40enlvbzEwYTFwM2ttc2pnNjZocHI4In0.PDC83Zv6lv9XIGU7HcbGYg'
            }).addTo(mymap);

<script async defer>
    let mymap = L.map('mapid').setView([38.04, -84.515], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZG5lbGxpcyIsImEiOiJjam40enlvbzEwYTFwM2ttc2pnNjZocHI4In0.PDC83Zv6lv9XIGU7HcbGYg'
    }).addTo(mymap);
</script>