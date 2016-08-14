# List clone

Python에서 list의 복사를 어떻게 해야할까 찾아본 적이 있는데, Google에서 찾아보니 생각보다 많은 복사 방법들이 있었다. 특히 stackoverfolw의 [이 글](http://stackoverflow.com/questions/2612802/how-to-clone-or-copy-a-list-in-python)이 기억에 남는다.

위 글을 읽어보면, 아래와 같이 복사 방법에 대한 속도를 측정한 답글이 있다.

> 1. 10.59 - [copy.deepcopy(old_list)](https://docs.python.org/2/library/copy.html#copy.deepcopy)
> 2. 10.16 - pure python Copy() method copying classes with deepcopy
> 3. 1.488 - pure python Copy() method not copying classes (only dicts/lists/tuples)
> 4. 0.325 - for item in old_list: new_list.append(item)
> 5. 0.217 - [i for i in old_list] (a list [comprehension](https://docs.python.org/2/tutorial/datastructures.html#list-comprehensions))
> 6. 0.186 - [copy.copy(old_list)](https://docs.python.org/2/library/copy.html#copy.copy)
> 7. 0.075 - list(old_list)
> 8. 0.053 - new_list = []; new_list.extend(old_list)
> 9. 0.039 - old_list[:] ([list slicing](https://docs.python.org/2/tutorial/introduction.html#lists))

위 결과를 보면, 속도는 `slicing`이 가장 빠르다. 하지만 `slicing`의 경우에는 얕은 복사가 이루어지고 `deepcopy`의 경우에는 깊은 복사가 이루어지니 상황에 맞추어 사용해야 한다.

개인적으로는 지금까지는 깊은 복사를 할 경우가 적어, 주로 `deepcopy`보다 `slicing`을 더 많이 사용하고 있다.
