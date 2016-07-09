# Emmet tab does not work in Atom

### Solution

file ``keymap.cson`` on (Atom > keymap)

```
'atom-text-editor:not([mini])':
    'tab': 'emmet:expand-abbreviation-with-tab'
```
