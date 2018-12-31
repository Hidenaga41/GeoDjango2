import os
from django.contrib.gis.utils import LayerMapping
from world.models import Medical

# Modelとファイルのカラムのマッピング
mapping = {
    'p04_001': 'P04_001',
    'p04_002': 'P04_002',
    'p04_003': 'P04_003',
    'p04_004': 'P04_004',
    'p04_005': 'P04_005',
    'p04_006': 'P04_006',
    'p04_007': 'P04_007',
    'geom': 'POINT',
}

# ファイルパス
geojson_file = os.path.abspath(os.path.join(
    os.path.dirname(__file__), 'data', 'public_facility.geojson'))

'''
実行(layer数＝24278, geom_type=point,)
layer.srs = GEOGCS["GCS_JGD_2000",
    DATUM["Japanese_Geodetic_Datum_2000",
        SPHEROID["GRS_1980",6378137.0,298.257222101]],
    PRIMEM["Greenwich",0.0],
    UNIT["Degree",0.0174532925199433]] )
'''


def run(verbose=True):
    lm = LayerMapping(Medical, geojson_file, mapping,
                      transform=False, encoding='UTF-8')
    lm.save(strict=True, verbose=verbose)
