# 用Riverpod实现的无限滚动列表

::: tip
当前版本为 [<Badge type="tip" text="riverpod-2.3.2" vertical="middle" />](https://pub.dev/packages/riverpod/versions/2.3.2)
:::

参考 [Observable Flutter: Diving into Riverpod, with Rémi Rousselet](https://www.youtube.com/watch?v=BJtQ0dfI-RA)

<iframe width="560" height="315" src="https://www.youtube.com/embed/BJtQ0dfI-RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[[toc]]

## 实现

### a API provider

```dart
@riverpod
Future<List<String>> fetchTODOs(FetchTODOsRef ref, {int page = 0}) async {
    await Future.delay(Duration(seconds: 3));
    return List.generate(20, (index) => 'page:$page, index:$index');
}
```

### UI

```dart
/// a ConsumerWidget build method
@override
Widget build(BuildContext context, WidgetRef ref) {
    return ListView.builder(
        itemBuilder: (context,index) {
            // 当前页
            final currentPage = index ~/ 20;
            // 当前条目
            final currentIndex = index % 20;

            return ref.watch(fetchTODOsProvider(page = currentPage)).when(
                data: (data) {
                    if(data.length < currentIndex) return null;
                    return ListTile(
                        title: Text(currentItems[currentIndex]),
                    );
                },
                error: (err,stack) => Text(err.toString()),
                loading: () {
                    if(currentIndex != 0) return null;
                    return ListTile(title:Text('Loading'));
                };
            );
        },
    );
}
```

### 缓存

缓存请求固定的时间

extension

```dart
extension on AutoDisposeRef {
    /// 缓存10分钟
    void cacheFor([Duration duration = const Duration(minutes: 10)]) {
        final link = ref.keepAlive();
        Future.delay(duration, link.close);
    }
}
```

在Provider中使用

```dart{3}
@riverpod
Future<List<String>> fetchTODOs(FetchTODOsRef ref, {int page = 0}) async {
    ref.cacheFor();
    ...
}
```
