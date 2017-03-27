# Samsung smart phone with Canvas

## Issue

일부 삼성 스마트폰에서 Canvas의 `path` 지원이 잘 안되어 `path`가 요동치는 현상이 발생하였다.

## Solution

`fill`의 경우 해당 현상이 발생하지 않아서 `fill`로 대체하여 처리함으로써 해결하였다. 추가로 이미지의 경우도 해당 현상이 발생하지 않았으나, 확대시 이미지의 품질이 좋지못해 `fill`을 사용하였다.