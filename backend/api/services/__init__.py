class Matrix:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.data = [[0] * cols for _ in range(rows)]

    def set_value(self, row, col, value):
        if 0 <= row < self.rows and 0 <= col < self.cols:
            self.data[row][col] = value
        else:
            raise ValueError("Row or column index out of range")

    def get_value(self, row, col):
        if 0 <= row < self.rows and 0 <= col < self.cols:
            return self.data[row][col]
        else:
            raise ValueError("Row or column index out of range")

    def __str__(self):
        return "\n".join([" ".join(map(str, row)) for row in self.data])

# how to set values (top left to bottom right)
# for i in range(rows):
#     for j in range(cols):
#         nameofmatrix.set_value(i, j, i * cols + j)
