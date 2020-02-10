import React, { Component, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ScheduleFrame from './ScheduleFrame';
import ScheduleFrameHalf from './ScheduleFrameHalf';

class CustomFlatList extends Component {
    render() {
        const sche = this.props.data;
        const scheduleData = sche.schedules.map(
            (sch) => {
                if (sch.end) {
                    return {
                        key: sch.type,
                        end: {
                            hours: sch.end.hours.join(', '),
                            description: sch.end.description
                        },
                        start: {
                            hours: sch.start.hours.join(', '),
                            description: sch.start.description
                        }
                    };
                }
                return {
                    key: sch.type,
                    start: {
                        hours: sch.start.hours.join(', '),
                        description: sch.start.description
                    }
                };
            }
        );

        return (
            <FlatList
            style={{marginBottom: 50,}}
                data={scheduleData}
                renderItem={
                    ({ item }) => {
                        if (item.end) {
                            return (<ScheduleFrame type={item.key} end={item.end} start={item.start}/>)
                        }
                        return (<ScheduleFrameHalf type={item.key} start={item.start}/>)
                    }
                }
            />
        );
    }
}

export default CustomFlatList;