import React from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

class LeftArrow extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        CenterComponent: PropTypes.node,
    }

    static defaultProps = {
        title: "Left",
    }

    render() {

        const {
            title,
            CenterComponent,
        } = this.props;

        const comps = CenterComponent ? CenterComponent : (
            <Button
                title={title}    
            />
        );

        return (
            <View 
                style={styles.container}
                pointerEvents="box-none"
            >
                {comps}
            </View>
        );
    }
}

export default LeftArrow;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        justifyContent: "center",
        zIndex: 1,
    }
});
