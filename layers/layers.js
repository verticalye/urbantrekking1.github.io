var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_monumenti_1 = new ol.format.GeoJSON();
var features_monumenti_1 = format_monumenti_1.readFeatures(json_monumenti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_monumenti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_monumenti_1.addFeatures(features_monumenti_1);
var lyr_monumenti_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_monumenti_1, 
                style: style_monumenti_1,
                interactive: true,
                title: '<img src="styles/legend/monumenti_1.png" /> monumenti'
            });

lyr_OSMStandard_0.setVisible(true);lyr_monumenti_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_monumenti_1];
lyr_monumenti_1.set('fieldAliases', {'descrizione': 'descrizione', 'img': 'img', });
lyr_monumenti_1.set('fieldImages', {'descrizione': 'TextEdit', 'img': 'ExternalResource', });
lyr_monumenti_1.set('fieldLabels', {'descrizione': 'no label', 'img': 'no label', });
lyr_monumenti_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});