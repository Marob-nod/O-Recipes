import { connect } from 'react-redux';
import Menu from 'src/components/Menu';

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
