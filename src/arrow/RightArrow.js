import React from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

class RightArrow extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        CenterComponent: PropTypes.node,
    }

    static defaultProps = {
        title: "Right",
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

export default RightArrow;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        zIndex: 1,
    }
});
