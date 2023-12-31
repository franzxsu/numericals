import re
import json

class Matrix:
    def __init__(self, rows, cols):
        self.rows = rows
        self.cols = cols
        self.data = [[0] * cols for _ in range(rows)]
        # self.input_matrix_values()

    @classmethod
    def from_json(cls, json_data):
        try:
            matrix_values = json.loads(json_data)
            if not isinstance(matrix_values, list) or not matrix_values:
                raise ValueError("Invalid matrix format in JSON")

            rows = len(matrix_values)
            cols = len(matrix_values[0])
            matrix = cls(rows, cols)

            for i in range(rows):
                for j in range(cols):
                    matrix.set_value(i, j, matrix_values[i][j])

            return matrix

        except json.JSONDecodeError:
            raise ValueError("Invalid JSON format")

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

    # OPERATIONS

    def row_interchange(self, row1, row2):
        if 0 <= row1 < self.rows and 0 <= row2 < self.rows:
            self.data[row1], self.data[row2] = self.data[row2], self.data[row1]
        else:
            raise ValueError("ROW OUT OF RANGE")

        self.to_json()

    # function can be for example, 2r1 which means 2 x r1 and then the second parameter is where the answer of the
    # scalar multiplication will go, if this is blank, answers will go to the row where the multiplication is called
    # not sure if this is correct doe
    def scalar_multiplication(self, function, row_where_u_put_le_answer=None):
        match = re.match(r'(\d+)([rR])(\d+)', function)
        if not match:
            raise ValueError("Invalid scalar multiplication function format")

        scalar, _, row_index = match.groups()
        scalar = float(scalar)
        row_index = int(row_index) - 1

        if 0 <= row_index < self.rows:
            target_row = row_index if row_where_u_put_le_answer is None else row_where_u_put_le_answer
            self.data[target_row] = [scalar * element for element in self.data[target_row]]
        else:
            raise ValueError("Invalid row index")

        return self.to_json()

    def matrix_operation(self, other, operation):
        """

        :param other: the other matrix
        :param operation: operation to be executed, can be either 'add' or 'subtract'
        :return: Matrix object - result of the matrix operations
        """
        if self.rows != other.rows or self.cols != other.cols:
            raise ValueError("matrices must have the same dimension")

        result = Matrix(self.rows, self.cols)
        for i in range(self.rows):
            for j in range(self.cols):
                if operation == 'add':
                    result.set_value(i, j, self.get_value(i, j) + other.get_value(i, j))
                elif operation == 'subtract':
                    result.set_value(i, j, self.get_value(i, j) - other.get_value(i, j))
                else:
                    raise ValueError("Invalid operation specified")

        return result.to_json()

    def to_json(self):
        import json
        return json.dumps(self.data)

# for i in range(rows):
#     for j in range(cols):
#         my_matrix.set_value(i, j, i * cols + j)
