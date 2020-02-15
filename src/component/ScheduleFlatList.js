import React, { Component, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ScheduleFrame from './ScheduleFrame';

class ScheduleFlatList extends Component {
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
                    },
                    end: null
                };
            }
        );

        return (
            <FlatList
            style={{marginBottom: 50,}}
                data={scheduleData}
                renderItem={
                    ({ item }) => (
                        <ScheduleFrame type={item.key} end={item.end} start={item.start}/>
                    )
                }
            />
        );
    }
}

export default ScheduleFlatList;