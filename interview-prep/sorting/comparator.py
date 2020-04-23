class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def comparator(a, b):
        if a.score != b.score:
            return b.score - a.score
        return (a.name > b.name)-(a.name < b.name)
