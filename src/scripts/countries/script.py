import json
import csv

countries = [] 
with open("./country-codes.csv", "r") as codes_file:

    csv_reader = csv.reader(codes_file)
    fields = next(csv_reader)
    dial_index = fields.index("Dial")
    alpha2_index = fields.index("ISO3166-1-Alpha-2")
    alpha3_index = fields.index("ISO3166-1-Alpha-3")
    english_name_index = fields.index("official_name_en")
    cldr_name_index = fields.index("CLDR display name")
    for line in csv_reader:
        if line[dial_index] == "":
            continue
        if  "," in line[dial_index]:
            for dial in line[dial_index].split(","):
                countries.append({
                    "code": dial,
                    "alpha2": line[alpha2_index],
                    "alpha3": line[alpha3_index],
                    "name": line[english_name_index] if line[english_name_index] != "" else line[cldr_name_index],
                })
            continue
        countries.append({
            "code": line[dial_index],
            "alpha2": line[alpha2_index],
            "alpha3": line[alpha3_index],
            "name": line[english_name_index] if line[english_name_index] != "" else line[cldr_name_index],
        })


print(f"""
interface Country {{
    code: string;
    alpha2: string;
    alpha3: string;
    name: string;
}} 

export const countries: Country[] =
{json.dumps(countries)}
""")
