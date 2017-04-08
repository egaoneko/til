# all & any in build-in functions

## [all](https://docs.python.org/2/library/functions.html#all)

```python
all(iterable)

# Equivalent to:
def all(iterable):
    for element in iterable:
        if not element:
            return False
    return True
```

Return `True` if all elements of the iterable are true (or if the iterable is empty).

## [any](https://docs.python.org/2/library/functions.html#any)

```python
any(iterable)

# Equivalent to:
def any(iterable):
    for element in iterable:
        if element:
            return True
    return False
```

Return `True` if any element of the iterable is true. If the iterable is empty, return `False`.