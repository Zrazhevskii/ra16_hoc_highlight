import { New } from './New';
import { Popular } from './Popular';
import PropTypes from 'prop-types';

export function WithNewOrPopularViews(Component) {
    return function hocViews(props) {
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        }
        if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        }
        return <Component {...props} />;
    };
}

WithNewOrPopularViews.propTypes = {
    views: PropTypes.number,
};
