// 뮤테이션 객체에는 onMutate, onSuccess, onError, onSettled와 같은 주요 옵션들이 있어서 뮤테이션 사이클에 따라 적절한 동작을 추가할 수 있다.
// onSuccess, 즉 뮤테이션이 성공한 시점에 ['post'] 쿼리를 invalidate해 주는 함수를 콜백으로 등록해 주면 된다.

const queryClient = useQueryClient();

// ...

const uploadPostMutation = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

//mutate() 함수의 콜백 옵션
//onSuccess, onError, onSettled와 같은 옵션은 useMutation()에서도 사용할 수 있고
//mutate() 함수에서도 사용할 수 있습니다. 이때 useMutation()에 등록한 콜백 함수들이 먼저 실행되고,
// 그다음에 mutate()에 등록한 콜백 함수들이 실행
const uploadPostMutation1 = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    console.log('onSuccess in useMutation');
  },
  onSettled: () => {
    console.log('onSettled in useMutation');
  },
});

//...

uploadPostMutation.mutate(newPost, {
  onSuccess: () => {
    console.log('onSuccess in mutate');
  },
  onSettled: () => {
    console.log('onSettled in mutate');
  },
});

//주의할점이있는데 useMutation()에 등록된 콜백 함수들은 컴포넌트가 언마운트되더라도 실행이 되지만,
//mutate()의 콜백 함수들은 만약 뮤테이션이 끝나기 전에 해당 컴포넌트가 언마운트되면
//실행되지 않는 특징을 가지고 있다
// 그래서 query invalidation과 같이 뮤테이션 과정에서 꼭 필요한 로직은 useMutation()을 통해 등록,
// 그 외에 다른 페이지로 리다이렉트한다든가, 혹은 결과를 토스트로 띄워주는 것과 같이
// 해당 컴포넌트에 종속적인 로직은 mutate()를 통해 등록해 주면 됩니다.

const uploadPostMutation2 = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

const handleUploadPost = newPost => {
  uploadPostMutation.mutate(newPost, {
    onSuccess: () => {
      toast('포스트가 성공적으로 업로드 되었습니다!');
    },
  });
};

//isPending 프로퍼티 활용하기
//마지막으로 포스트가 업로드되는 중에는 중복해서 업로드를 하면 안 되니까 버튼을 비활성화해 보는데
// 뮤테이션에는 isPending이라는 값이 있다.
//다음과 같이 uploadPostMutation.isPending 값을 이용하면 간단히 구현할 수 있다. 참고해보자

const uploadPostMutation3 = useMutation({
  mutationFn: newPost => uploadPost(newPost),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});

// ...

<button disabled={uploadPostMutation.isPending || !content} type='submit'>
  업로드
</button>;
