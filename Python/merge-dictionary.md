# Merge dictionary

## Over Python 3.5

```python
>>> x = {'a': 1, 'b': 2}
>>> y = {'b': 3, 'c': 4}
>>> z = {**x, **y}
>>> z
{'a': 1, 'b': 3, 'c': 4}
```

## Not yet Python 3.5

```python
z = x.copy()
z.update(y) # which returns None since it mutates z
```

## Reference

* [PEP 448 -- Additional Unpacking Generalizations](https://www.python.org/dev/peps/pep-0448/)
* [[Python-Dev] PEP 448 review](https://mail.python.org/pipermail/python-dev/2015-February/138564.html)
* [stack overflow](https://stackoverflow.com/questions/38987/how-to-merge-two-python-dictionaries-in-a-single-expression)