import ListView from './ListView';
import bus from '../utils/bus'

export default function createListView(name) {
  return {
    // 재사용할 인스턴스 옵션들이 들어간다.
    name: name,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
      }, 3000)
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}
