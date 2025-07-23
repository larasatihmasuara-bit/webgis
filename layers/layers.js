var wms_layers = [];

var format_areabanjir_0 = new ol.format.GeoJSON();
var features_areabanjir_0 = format_areabanjir_0.readFeatures(json_areabanjir_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areabanjir_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areabanjir_0.addFeatures(features_areabanjir_0);
var lyr_areabanjir_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areabanjir_0, 
                style: style_areabanjir_0,
                popuplayertitle: 'area banjir',
                interactive: true,
                title: '<img src="styles/legend/areabanjir_0.png" /> area banjir'
            });
var format_Batas_Jakarta_1 = new ol.format.GeoJSON();
var features_Batas_Jakarta_1 = format_Batas_Jakarta_1.readFeatures(json_Batas_Jakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Jakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Jakarta_1.addFeatures(features_Batas_Jakarta_1);
var lyr_Batas_Jakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Jakarta_1, 
                style: style_Batas_Jakarta_1,
                popuplayertitle: 'Batas_Jakarta',
                interactive: true,
                title: '<img src="styles/legend/Batas_Jakarta_1.png" /> Batas_Jakarta'
            });
var format_JalanDKIJakarta_2 = new ol.format.GeoJSON();
var features_JalanDKIJakarta_2 = format_JalanDKIJakarta_2.readFeatures(json_JalanDKIJakarta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDKIJakarta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDKIJakarta_2.addFeatures(features_JalanDKIJakarta_2);
var lyr_JalanDKIJakarta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDKIJakarta_2, 
                style: style_JalanDKIJakarta_2,
                popuplayertitle: 'Jalan DKI Jakarta',
                interactive: true,
                title: '<img src="styles/legend/JalanDKIJakarta_2.png" /> Jalan DKI Jakarta'
            });
var format_SekolahJakarta_3 = new ol.format.GeoJSON();
var features_SekolahJakarta_3 = format_SekolahJakarta_3.readFeatures(json_SekolahJakarta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahJakarta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahJakarta_3.addFeatures(features_SekolahJakarta_3);
var lyr_SekolahJakarta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahJakarta_3, 
                style: style_SekolahJakarta_3,
                popuplayertitle: 'Sekolah Jakarta',
                interactive: true,
                title: '<img src="styles/legend/SekolahJakarta_3.png" /> Sekolah Jakarta'
            });
var format_SUNGAI_LN_25K_Jakbar_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_Jakbar_4 = format_SUNGAI_LN_25K_Jakbar_4.readFeatures(json_SUNGAI_LN_25K_Jakbar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_Jakbar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_Jakbar_4.addFeatures(features_SUNGAI_LN_25K_Jakbar_4);
var lyr_SUNGAI_LN_25K_Jakbar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_Jakbar_4, 
                style: style_SUNGAI_LN_25K_Jakbar_4,
                popuplayertitle: 'SUNGAI_LN_25K_Jakbar',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_Jakbar_4.png" /> SUNGAI_LN_25K_Jakbar'
            });

lyr_areabanjir_0.setVisible(true);lyr_Batas_Jakarta_1.setVisible(true);lyr_JalanDKIJakarta_2.setVisible(true);lyr_SekolahJakarta_3.setVisible(true);lyr_SUNGAI_LN_25K_Jakbar_4.setVisible(true);
var layersList = [lyr_areabanjir_0,lyr_Batas_Jakarta_1,lyr_JalanDKIJakarta_2,lyr_SekolahJakarta_3,lyr_SUNGAI_LN_25K_Jakbar_4];
lyr_areabanjir_0.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Batas_Jakarta_1.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_JalanDKIJakarta_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'NAMRJL_2': 'NAMRJL_2', 'KONRJL_2': 'KONRJL_2', 'MATRJL_2': 'MATRJL_2', 'FGSRJL_2': 'FGSRJL_2', 'UTKRJL_2': 'UTKRJL_2', 'TOLRJL_2': 'TOLRJL_2', 'WLYRJL_2': 'WLYRJL_2', 'AUTRJL_2': 'AUTRJL_2', 'KLSRJL_2': 'KLSRJL_2', 'SPCRJL_2': 'SPCRJL_2', 'JPARJL_2': 'JPARJL_2', 'ARHRJL_2': 'ARHRJL_2', 'STARJL_2': 'STARJL_2', 'KLLRJL_2': 'KLLRJL_2', 'MEDRJL_2': 'MEDRJL_2', 'LOCRJL_2': 'LOCRJL_2', 'JARRJL_2': 'JARRJL_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'SRS_ID_2': 'SRS_ID_2', 'LCODE_2': 'LCODE_2', 'METADATA_2': 'METADATA_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'NAMRJL_3': 'NAMRJL_3', 'KONRJL_3': 'KONRJL_3', 'MATRJL_3': 'MATRJL_3', 'FGSRJL_3': 'FGSRJL_3', 'UTKRJL_3': 'UTKRJL_3', 'TOLRJL_3': 'TOLRJL_3', 'WLYRJL_3': 'WLYRJL_3', 'AUTRJL_3': 'AUTRJL_3', 'KLSRJL_3': 'KLSRJL_3', 'SPCRJL_3': 'SPCRJL_3', 'JPARJL_3': 'JPARJL_3', 'ARHRJL_3': 'ARHRJL_3', 'STARJL_3': 'STARJL_3', 'KLLRJL_3': 'KLLRJL_3', 'MEDRJL_3': 'MEDRJL_3', 'LOCRJL_3': 'LOCRJL_3', 'JARRJL_3': 'JARRJL_3', 'FCODE_3': 'FCODE_3', 'REMARK_3': 'REMARK_3', 'SRS_ID_3': 'SRS_ID_3', 'LCODE_3': 'LCODE_3', 'METADATA_3': 'METADATA_3', 'SHAPE_Le_2': 'SHAPE_Le_2', 'NAMRJL_4': 'NAMRJL_4', 'KONRJL_4': 'KONRJL_4', 'MATRJL_4': 'MATRJL_4', 'FGSRJL_4': 'FGSRJL_4', 'UTKRJL_4': 'UTKRJL_4', 'TOLRJL_4': 'TOLRJL_4', 'WLYRJL_4': 'WLYRJL_4', 'AUTRJL_4': 'AUTRJL_4', 'KLSRJL_4': 'KLSRJL_4', 'SPCRJL_4': 'SPCRJL_4', 'JPARJL_4': 'JPARJL_4', 'ARHRJL_4': 'ARHRJL_4', 'STARJL_4': 'STARJL_4', 'KLLRJL_4': 'KLLRJL_4', 'MEDRJL_4': 'MEDRJL_4', 'LOCRJL_4': 'LOCRJL_4', 'JARRJL_4': 'JARRJL_4', 'FCODE_4': 'FCODE_4', 'REMARK_4': 'REMARK_4', 'SRS_ID_4': 'SRS_ID_4', 'LCODE_4': 'LCODE_4', 'METADATA_4': 'METADATA_4', 'SHAPE_Le_3': 'SHAPE_Le_3', 'NAMRJL_5': 'NAMRJL_5', 'KONRJL_5': 'KONRJL_5', 'MATRJL_5': 'MATRJL_5', 'FGSRJL_5': 'FGSRJL_5', 'UTKRJL_5': 'UTKRJL_5', 'TOLRJL_5': 'TOLRJL_5', 'WLYRJL_5': 'WLYRJL_5', 'AUTRJL_5': 'AUTRJL_5', 'KLSRJL_5': 'KLSRJL_5', 'SPCRJL_5': 'SPCRJL_5', 'JPARJL_5': 'JPARJL_5', 'ARHRJL_5': 'ARHRJL_5', 'STARJL_5': 'STARJL_5', 'KLLRJL_5': 'KLLRJL_5', 'MEDRJL_5': 'MEDRJL_5', 'LOCRJL_5': 'LOCRJL_5', 'JARRJL_5': 'JARRJL_5', 'FCODE_5': 'FCODE_5', 'REMARK_5': 'REMARK_5', 'SRS_ID_5': 'SRS_ID_5', 'LCODE_5': 'LCODE_5', 'METADATA_5': 'METADATA_5', 'SHAPE_Le_4': 'SHAPE_Le_4', });
lyr_SekolahJakarta_3.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_SUNGAI_LN_25K_Jakbar_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_areabanjir_0.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Batas_Jakarta_1.set('fieldImages', {'KAB_NAME': '', });
lyr_JalanDKIJakarta_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'NAMRJL_2': '', 'KONRJL_2': '', 'MATRJL_2': '', 'FGSRJL_2': '', 'UTKRJL_2': '', 'TOLRJL_2': '', 'WLYRJL_2': '', 'AUTRJL_2': '', 'KLSRJL_2': '', 'SPCRJL_2': '', 'JPARJL_2': '', 'ARHRJL_2': '', 'STARJL_2': '', 'KLLRJL_2': '', 'MEDRJL_2': '', 'LOCRJL_2': '', 'JARRJL_2': '', 'FCODE_2': '', 'REMARK_2': '', 'SRS_ID_2': '', 'LCODE_2': '', 'METADATA_2': '', 'SHAPE_Le_1': '', 'NAMRJL_3': '', 'KONRJL_3': '', 'MATRJL_3': '', 'FGSRJL_3': '', 'UTKRJL_3': '', 'TOLRJL_3': '', 'WLYRJL_3': '', 'AUTRJL_3': '', 'KLSRJL_3': '', 'SPCRJL_3': '', 'JPARJL_3': '', 'ARHRJL_3': '', 'STARJL_3': '', 'KLLRJL_3': '', 'MEDRJL_3': '', 'LOCRJL_3': '', 'JARRJL_3': '', 'FCODE_3': '', 'REMARK_3': '', 'SRS_ID_3': '', 'LCODE_3': '', 'METADATA_3': '', 'SHAPE_Le_2': '', 'NAMRJL_4': '', 'KONRJL_4': '', 'MATRJL_4': '', 'FGSRJL_4': '', 'UTKRJL_4': '', 'TOLRJL_4': '', 'WLYRJL_4': '', 'AUTRJL_4': '', 'KLSRJL_4': '', 'SPCRJL_4': '', 'JPARJL_4': '', 'ARHRJL_4': '', 'STARJL_4': '', 'KLLRJL_4': '', 'MEDRJL_4': '', 'LOCRJL_4': '', 'JARRJL_4': '', 'FCODE_4': '', 'REMARK_4': '', 'SRS_ID_4': '', 'LCODE_4': '', 'METADATA_4': '', 'SHAPE_Le_3': '', 'NAMRJL_5': '', 'KONRJL_5': '', 'MATRJL_5': '', 'FGSRJL_5': '', 'UTKRJL_5': '', 'TOLRJL_5': '', 'WLYRJL_5': '', 'AUTRJL_5': '', 'KLSRJL_5': '', 'SPCRJL_5': '', 'JPARJL_5': '', 'ARHRJL_5': '', 'STARJL_5': '', 'KLLRJL_5': '', 'MEDRJL_5': '', 'LOCRJL_5': '', 'JARRJL_5': '', 'FCODE_5': '', 'REMARK_5': '', 'SRS_ID_5': '', 'LCODE_5': '', 'METADATA_5': '', 'SHAPE_Le_4': '', });
lyr_SekolahJakarta_3.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', });
lyr_SUNGAI_LN_25K_Jakbar_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_areabanjir_0.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Batas_Jakarta_1.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_JalanDKIJakarta_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'NAMRJL_2': 'no label', 'KONRJL_2': 'no label', 'MATRJL_2': 'no label', 'FGSRJL_2': 'no label', 'UTKRJL_2': 'no label', 'TOLRJL_2': 'no label', 'WLYRJL_2': 'no label', 'AUTRJL_2': 'no label', 'KLSRJL_2': 'no label', 'SPCRJL_2': 'no label', 'JPARJL_2': 'no label', 'ARHRJL_2': 'no label', 'STARJL_2': 'no label', 'KLLRJL_2': 'no label', 'MEDRJL_2': 'no label', 'LOCRJL_2': 'no label', 'JARRJL_2': 'no label', 'FCODE_2': 'no label', 'REMARK_2': 'no label', 'SRS_ID_2': 'no label', 'LCODE_2': 'no label', 'METADATA_2': 'no label', 'SHAPE_Le_1': 'no label', 'NAMRJL_3': 'no label', 'KONRJL_3': 'no label', 'MATRJL_3': 'no label', 'FGSRJL_3': 'no label', 'UTKRJL_3': 'no label', 'TOLRJL_3': 'no label', 'WLYRJL_3': 'no label', 'AUTRJL_3': 'no label', 'KLSRJL_3': 'no label', 'SPCRJL_3': 'no label', 'JPARJL_3': 'no label', 'ARHRJL_3': 'no label', 'STARJL_3': 'no label', 'KLLRJL_3': 'no label', 'MEDRJL_3': 'no label', 'LOCRJL_3': 'no label', 'JARRJL_3': 'no label', 'FCODE_3': 'no label', 'REMARK_3': 'no label', 'SRS_ID_3': 'no label', 'LCODE_3': 'no label', 'METADATA_3': 'no label', 'SHAPE_Le_2': 'no label', 'NAMRJL_4': 'no label', 'KONRJL_4': 'no label', 'MATRJL_4': 'no label', 'FGSRJL_4': 'no label', 'UTKRJL_4': 'no label', 'TOLRJL_4': 'no label', 'WLYRJL_4': 'no label', 'AUTRJL_4': 'no label', 'KLSRJL_4': 'no label', 'SPCRJL_4': 'no label', 'JPARJL_4': 'no label', 'ARHRJL_4': 'no label', 'STARJL_4': 'no label', 'KLLRJL_4': 'no label', 'MEDRJL_4': 'no label', 'LOCRJL_4': 'no label', 'JARRJL_4': 'no label', 'FCODE_4': 'no label', 'REMARK_4': 'no label', 'SRS_ID_4': 'no label', 'LCODE_4': 'no label', 'METADATA_4': 'no label', 'SHAPE_Le_3': 'no label', 'NAMRJL_5': 'no label', 'KONRJL_5': 'no label', 'MATRJL_5': 'no label', 'FGSRJL_5': 'no label', 'UTKRJL_5': 'no label', 'TOLRJL_5': 'no label', 'WLYRJL_5': 'no label', 'AUTRJL_5': 'no label', 'KLSRJL_5': 'no label', 'SPCRJL_5': 'no label', 'JPARJL_5': 'no label', 'ARHRJL_5': 'no label', 'STARJL_5': 'no label', 'KLLRJL_5': 'no label', 'MEDRJL_5': 'no label', 'LOCRJL_5': 'no label', 'JARRJL_5': 'no label', 'FCODE_5': 'no label', 'REMARK_5': 'no label', 'SRS_ID_5': 'no label', 'LCODE_5': 'no label', 'METADATA_5': 'no label', 'SHAPE_Le_4': 'no label', });
lyr_SekolahJakarta_3.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_SUNGAI_LN_25K_Jakbar_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_Jakbar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});