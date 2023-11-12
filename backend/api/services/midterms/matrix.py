class Matrix:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.data = [[0] * cols for _ in range(rows)]
        self.input_matrix_values()

    def input_matrix_values(self):
        print("ENTER VALUES FOR MATRIX")
        for i in range(self.rows):
            for j in range(self.cols):
                value = float(input(f"Enter value for ({i + 1}, {j + 1}): "))
                self.set_value(i, j, value)

    def set_value(self, row, col, value):
        if 0 <= row < self.rows and 0 <= col < self.cols:
            self.data[row][col] = value
        else:
            raise ValueError("OUT OF RANGE")

    def get_value(self, row, col):
        if 0 <= row < self.rows and 0 <= col < self.cols:
            return self.data[row][col]
        else:
            raise ValueError("OUT OF RANGE")

    def __str__(self):
        return "\n".join([" ".join(map(str, row)) for row in self.data])

# ELEMENTARY ROW OPERATIONS

    def row_interchange(self, row1, row2):
        if 0 <= row1 < self.rows and 0 <= row2 < self.rows:
            self.data[row1], self.data[row2] = self.data[row2], self.data[row1]
        else:
            raise ValueError("ROW OUT OF RANGE")

# for i in range(rows):
#     for j in range(cols):
#         my_matrix.set_value(i, j, i * cols + j)
