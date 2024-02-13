import { Observer, fromEvent, map } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const divTex = document.createElement('div');
divTex.innerHTML = `Tempore eius consectetur consequatur et modi similique illum aut fugiat. Sequi harum vel est veritatis. Fuga et quasi in architecto qui consequatur est. Ut illum minima veritatis ipsa consequuntur enim. Aperiam sit id numquam facilis natus sequi autem doloremque. Aperiam eaque est quis molestias ut et eligendi eligendi sit. Quis vitae recusandae vel officia excepturi est reprehenderit.Voluptate aut laudantium deleniti harum veritatis labore ab provident dolor. Nemo repellendus ipsam culpa eius.Non ab qui odio. Animi qui repellat. Sed ratione ducimus ipsa alias impedit maxime molestiae. Laboriosam voluptatem aspernatur et iusto suscipit molestiae ea. Fuga quia harum eos et fuga ut animi. Quia nostrum aliquam hic ipsam.
 <br><br>
Vel culpa a quia sunt quos vitae et. Repudiandae saepe dolor ut. Beatae nesciunt sit dolores voluptas placeat aliquid voluptatem cum animi. Quo consequatur et quod esse sed cumque sunt architecto. Dignissimos nostrum corrupti delectus in accusantium suscipit.Facere minima maxime dicta cupiditate. Fuga sed deleniti doloremque ut temporibus. Perferendis culpa quod error sed ut commodi.
 <br><br>
Rerum repudiandae ea animi eaque dolores et cupiditate maiores. Incidunt labore suscipit iusto accusamus delectus omnis ratione assumenda voluptas. Ut aliquid tempore quae quibusdam. Delectus totam consequatur ut sequi autem itaque expedita unde.Est modi veniam deserunt ea molestias ut tempora facere dolore. Voluptas reprehenderit perferendis officia sed. Adipisci possimus illum voluptas earum a ea odit quo. Consequatur eveniet et atque et minima. Et molestias eos voluptas repellendus vel iste et neque.
 
Laudantium non et. Facere ipsa earum aut a labore. Quo et exercitationem. Velit perferendis aut officiis dignissimos soluta delectus. Et qui debitis nam quam sit.
 
Sit minima quas quo. Omnis omnis ipsa deleniti sequi occaecati. Tempore quidem ducimus ad ea quia dolorem dolorem. Exercitationem iure soluta quidem ad.
 <br><br>
Aperiam dolorum dignissimos ut molestias qui explicabo. Autem incidunt est vel est. Illum et et enim eos porro et. Recusandae quae placeat tempora cum maxime possimus dolor. Et magni nihil ipsam dolore magni.Nulla iusto ipsam perferendis officia voluptate. Ut repudiandae et et tenetur voluptates commodi. In incidunt hic. Eveniet reiciendis soluta. In quisquam non reprehenderit quis placeat itaque qui quia.
 <br><br>
Molestiae modi quos sit tempora velit et. Corrupti animi laudantium sit doloremque. Omnis dignissimos corrupti et ea. Beatae dolores molestiae quia modi rem.
 
Rem dicta eveniet et sed dicta. Illum a nihil autem cum. Cumque atque provident et fuga et. Quam illum nihil non vero sed nam qui maxime quidem.
 
Magni laudantium in velit voluptatem. Distinctio quibusdam perspiciatis voluptas mollitia est autem amet nesciunt. Illo consequatur mollitia odit in non corporis voluptas. Sint quasi qui quia aut cupiditate voluptatem beatae aut.
<br><br>
 
Qui ut libero et iure. Magni pariatur recusandae inventore doloremque dolores temporibus aut id expedita. Fuga occaecati voluptatem quis dolor ut iusto quidem cum neque.
 <br><br>
Impedit molestiae rem omnis magnam dignissimos cupiditate eum fugit et. Eligendi neque eos voluptate et culpa illum ea accusantium inventore. Fugit placeat necessitatibus voluptatum in. Qui iure error. Delectus rerum inventore alias molestias magnam incidunt. Ut possimus nisi sed earum quae omnis vel quidem iusto.
<br><br>
Eum numquam doloribus eligendi rerum quia iure tempore amet perferendis. Nulla quis necessitatibus voluptates fugit necessitatibus voluptatem iste voluptas. Impedit atque rerum. Laborum necessitatibus nisi voluptas alias quia enim. Sint commodi sit ut sunt.
 <br><br>
Nulla quo aut molestias asperiores sed temporibus reprehenderit. Pariatur vitae quos in aut dolor aut earum et laborum. Reiciendis saepe exercitationem. Qui placeat magnam corrupti.
 <br><br>
Non commodi dolore. Ipsa quos libero doloribus. Culpa sunt est sed. Vel distinctio possimus iste inventore. Omnis tempore delectus culpa laborum ad officiis.
<br><br>
Non qui corporis quasi facilis velit. Eligendi autem cumque qui iure. Assumenda dolores sapiente neque architecto recusandae vel ut magni et. Doloremque dolor quia rerum. Dolore dolor dolor eaque quia et.
 <br><br>
Eveniet vel numquam ullam unde iste dolore quis nobis est. Qui sint sit laboriosam nihil reprehenderit consequatur quo occaecati natus. Occaecati nemo omnis quo. Consequatur et repudiandae at et neque et. Nobis est veritatis in.
 <br><br>
Deserunt quisquam modi. Delectus delectus delectus facilis ut et accusamus sint. Quae non quam omnis ab et illo qui aliquid molestiae.
<br><br>
Eum numquam doloribus eligendi rerum quia iure tempore amet perferendis. Nulla quis necessitatibus voluptates fugit necessitatibus voluptatem iste voluptas. Impedit atque rerum. Laborum necessitatibus nisi voluptas alias quia enim. Sint commodi sit ut sunt.
 <br><br>
Nulla quo aut molestias asperiores sed temporibus reprehenderit. Pariatur vitae quos in aut dolor aut earum et laborum. Reiciendis saepe exercitationem. Qui placeat magnam corrupti.
 <br><br>
Non commodi dolore. Ipsa quos libero doloribus. Culpa sunt est sed. Vel distinctio possimus iste inventore. Omnis tempore delectus culpa laborum ad officiis.
<br><br>
Non qui corporis quasi facilis velit. Eligendi autem cumque qui iure. Assumenda dolores sapiente neque architecto recusandae vel ut magni et. Doloremque dolor quia rerum. Dolore dolor dolor eaque quia et.
 <br><br>
Eveniet vel numquam ullam unde iste dolore quis nobis est. Qui sint sit laboriosam nihil reprehenderit consequatur quo occaecati natus. Occaecati nemo omnis quo. Consequatur et repudiandae at et neque et. Nobis est veritatis in.
 <br><br>
Deserunt quisquam modi. Delectus delectus delectus facilis ut et accusamus sint. Quae non quam omnis ab et illo qui aliquid molestiae.
`;

const body = document.querySelector('body');
body.appendChild(divTex);

const progresBar = document.createElement('div');
progresBar.setAttribute('class', 'progress-bar');
body.appendChild(progresBar);

const scroll$ = fromEvent<Event>(document, 'scroll');
const calcularPorcentaje = ({ target }) => {
  const { clientHeight, scrollHeight, scrollTop } = target.documentElement;
  console.log({ clientHeight, scrollHeight, scrollTop });
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

scroll$.pipe(map(calcularPorcentaje)).subscribe((porcent) => {
  progresBar.style.width = `${porcent}%`;
});
