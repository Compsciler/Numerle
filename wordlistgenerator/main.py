import random
from jsonfilelist import json_file_to_list, list_to_json_file

random.seed(0)
random.seed(random.randrange(10**5))

new_word_list_file = 'constants/wordlist.json'

def get_number_list(digit_count):
    new_word_list = [f"{n:0{digit_count}d}" for n in range(10**digit_count)]
    return new_word_list

new_word_list = get_number_list(5)
random.shuffle(new_word_list)
list_to_json_file(new_word_list, new_word_list_file)
