import glob
import ConfigParser
import re
import sys
import csv

spells = {}
stats = {}
config = ConfigParser.RawConfigParser()
regex = {
  "name_cooldown_cost_self": r"super\('(.*)', (\d*), (\d*), (true|false)\);",
  "damage": r"this\.registerCastableChild\(new DamageSpell\((.*)\)\);",
  "heal": r"this\.registerCastableChild\(new HealSpell\((.*)\)\);",
  "stats": r"([A-Z]*): *new CharacterStatsModel\((\d*), (\d*), (\d*)\)"
}


def format_number(number):
    return str(number).replace('.', ',')

def scan_stats():
    f = open(config.get("General", "stats_path"))
    for mNum, m in enumerate(re.finditer(regex["stats"], f.read())):
        stats[m.group(1).lower()] = {"hp": m.group(2), "attack": m.group(3), "speed": m.group(4)}

def scan_spells():
    classes = ["common", "hunter", "mage", "paladin", "priest", "rogue", "warrior", "wizard"]
    for clazz in classes:
        path = config.get("General", "spell_path") + clazz + "/"
        for filename in glob.glob(path + "*Spell.ts"):
            f = open(filename, 'r')
            f_str = f.read()
            m = re.search(regex["name_cooldown_cost_self"], f_str)
            spell_name = m.group(1)
            spell = {"name": spell_name, "class": clazz, "cooldown": format_number(m.group(2)), "cost": format_number(m.group(3)), "self": format_number(1 if m.group(4) == "true" else 0)}
            m = re.search(regex["damage"], f_str)
            spell["damage_ratio"] = format_number(m.group(1) if m else 0)
            m = re.search(regex["heal"], f_str)
            spell["heal_ratio"] = format_number(m.group(1) if m else 0)
            if clazz  != "common":
                spell["damage"] = format_number(float(spell["damage_ratio"].replace(',','.')) * float(stats[clazz]["attack"].replace(',','.')))
                spell["heal"] = format_number(float(spell["heal_ratio"].replace(',','.')) * float(stats[clazz]["attack"].replace(',','.')))
            else:
                spell["damage"] = format_number(0)
                spell["heal"] = format_number(0)
            if (float(spell["cost"].replace(',','.')) != 0):
                spell["damage_on_cost"] = format_number(float(spell["damage"].replace(',','.')) / float(spell["cost"].replace(',','.')))
            if (float(spell["cooldown"].replace(',', '.')) != 0):
                spell["damage_on_cooldown"] = format_number(float(spell["damage"].replace(',','.')) / float(spell["cooldown"].replace(',','.')))
            spells[spell_name] = spell
            f.close()


def comptute_output():
  try:
      out = open("output.csv", 'w')
      fieldnames = ["name", "class", "cost", "cooldown", "damage_ratio", "damage", "heal_ratio", "heal", "self", "damage_on_cost", "damage_on_cooldown"]
      writer = csv.DictWriter(out, fieldnames=fieldnames, delimiter=';')
      writer.writeheader()
      for spell in spells.values():
          writer.writerow(spell)

      out.close()
  except IOError:
      print >> sys.stderr, "Cannot open file \"output.csv\". Please make sure no program use it."


def main():
    config.read("config.properties")
    scan_stats()
    scan_spells()
    comptute_output()



if __name__ == "__main__":
    main()
