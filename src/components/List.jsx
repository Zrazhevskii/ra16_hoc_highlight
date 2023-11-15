import { Video } from './Video';
import { Article } from './Article';
import { WithNewOrPopularViews } from './WithNewOrPopularViews';

export function List(props) {
    return props.list.map((item) => {
        const WithHocVideo = WithNewOrPopularViews(Video);
        const WithHocArticle = WithNewOrPopularViews(Article);

        switch (item.type) {
            case 'video':
                return <WithHocVideo {...item} key={item.id} />;

            case 'article':
                return <WithHocArticle {...item} key={item.id} />;
        }
    });
}
