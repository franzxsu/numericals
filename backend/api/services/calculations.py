# here are the actual fuckin methods

def perform_calculation(numbers, method):
    if method == 'sum':
        return sum(numbers)
    elif method == 'average':
        return sum(numbers) / len(numbers)
    else:
        return None
