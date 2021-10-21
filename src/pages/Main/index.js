import React, { Component } from "react";
import { Layout } from "antd";
import Header from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/index";
import { MainRoutes } from "../../router";
import Events from "../../components/Events";
import styles from "./index.module.css";

class Main extends Component {
	state = {
		// 是否隐藏图标
		collapsed: false
	};
	componentDidMount() {
		// 绑定隐藏图标事件
		Events.on("collapse", this.onCollapse);
	}
	componentWillUnmount() {
		// 解除隐藏图标事件
		Events.off("collapse", this.onCollapse);
	}
	// 隐藏图标事件
	onCollapse = () => {
		const collapsed = this.state.collapsed;
		this.setState({
			collapsed: !collapsed
		});
	};
	render() {
		console.log(this.props);
		return (
			<div className={styles.main}>
				<Layout className={styles.mainContent}>
					<Layout.Sider collapsed={this.state.collapsed}>
						<Sidebar collapsed={this.state.collapsed} />
					</Layout.Sider>
					<Layout>
						<Header />
						<Layout.Content className={styles.mainRight}>
							<MainRoutes />
						</Layout.Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default Main;
