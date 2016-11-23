# Intersection

Destructive seems simplest, especially if we can assume the input is sorted:

```javascript
/* destructively finds the intersection of 
 * two arrays in a simple fashion.  
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *  State of input arrays is undefined when
 *  the function returns.  They should be 
 *  (prolly) be dumped.
 *
 *  Should have O(n) operations, where n is 
 *    n = MIN(a.length, b.length)
 */
function intersection_destructive(a, b)
{
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {  
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else /* they're equal */
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return result;
}
```

Non-destructive has to be a hair more complicated, since we’ve got to track indices:

```javascript
/* finds the intersection of 
 * two arrays in a simple fashion.  
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is 
 *    n = MIN(a.length(), b.length())
 */
function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = [];

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript)