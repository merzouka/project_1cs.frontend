import csv
import json
import sys

provinces = {} 
with open("./worldcities.csv", "r") as worldcities_file:
    reader = csv.reader(worldcities_file)
    
    fields = next(reader)
    id_index = fields.index("id")
    city_index = fields.index("city_ascii")
    population_index = fields.index("population")
    country_index = fields.index("country")
    province_index = fields.index("admin_name")
    for row in reader:
        if row[country_index] == "Algeria":
            if not row[province_index] in provinces.keys():
                provinces[row[province_index]] = [{
                    "city": row[city_index],
                    "id": row[population_index],
                    "population": int(row[id_index]),
                }]
            else:
                provinces[row[province_index]].append({
                    "city": row[city_index],
                    "id": row[population_index],
                    "population": int(row[id_index]),
                })

cities = []
for province in provinces:
    cities.append({
        "province": province,
        "cities": provinces[province]
    })

if sys.argv[1] == "--city":
    print(f"""{json.dumps(cities)}""")
elif sys.argv[1] == "--province":
    print(f"""{json.dumps(list(map(lambda x: x["province"], cities)))}""")
