# `__eq__` & `__ne__` functions

```python
class Number(object):
    """Very basic"""
    def __init__(self, some_number):
        self.some_number = some_number

    def __eq__(self, other):
        """Override the default Equals behavior"""
        if isinstance(other, self.__class__):
            return self.__dict__ == other.__dict__
        return NotImplemented

    def __ne__(self, other):
        """Define a non-equality test"""
        if isinstance(other, self.__class__):
            return not self.__eq__(other)
        return NotImplemented

    def __hash__(self):
        """Override the default hash behavior (that returns the id or the object)"""
        return hash(tuple(sorted(self.__dict__.items())))


n1 = Number(1)
n2 = Number(1)

class NumberPlus(Number):
    pass

n3 = NumberPlus(1)
n4 = NumberPlus(4)

assert n1 == n2
assert n2 == n1
assert not n1 != n2
assert not n2 != n1

assert n1 == n3
assert n3 == n1
assert not n1 != n3
assert not n3 != n1

assert not n1 == n4
assert not n4 == n1
assert n1 != n4
assert n4 != n1

assert len(set([n1, n2, n3, ])) == 1
assert len(set([n1, n2, n3, n4])) == 2
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/390250/elegant-ways-to-support-equivalence-equality-in-python-classes)
