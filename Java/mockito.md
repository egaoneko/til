# Mockito

## InjectMocks

```java
@RunWith(MockitoJUnitRunner.class)
public class InjectMocksTest() {
    @InjectMocks
    private InjectedMocksSevice injectedMocksSevice;
  
    @Mock
    private MockForInject1 mockForInject1;
  
    @Mock
    private MockForInject2 mockForInject2;
    
    private MockObject1 mockObject1;
    private MockObject2 mockObject2;
    
    @Before
    public void setUp() {
        mockObject1 = random(MockObject1.class);
        mockObject2 = random(MockObject2.class);
    }
  
    @Test
    private void testMethod() {
        // given
        when(mockForInject1.usedMethodInInjectedMocksSevice(any())).thenReturn(mockObject1);
        when(mockForInject2.usedMethodInInjectedMocksSevice(any(Integer.class))).thenReturn(mockObject2);
        
        // when
        ResultObject actual = injectedMocksSevice.testMethod(params);
        
        // then
        assertThat(actual, is(expected));
        verify(mockForInject1, times(1)).usedMethodInInjectedMocksSevice(anyInt());
        verify(mockForInject2, times(1)).usedMethodInInjectedMocksSevice(anyInt());
    }
}
```
