import React, {Component} from 'react';
import {Grid, Paper, withStyles} from "@material-ui/core"
import PropTypes from 'prop-types';

const styles = {
    Paper: {
        height: "100%"
    }
};
class Drawing extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid xs={8} md={8} sm={8} item>
                <Paper className={classes.Paper}>qwe</Paper>
            </Grid>
        );
    }
}

Drawing.propTypes = {};

export default withStyles(styles)(Drawing);
