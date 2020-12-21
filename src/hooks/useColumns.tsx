import React, { useEffect, useMemo, useState } from 'react';
import { Popover, Tooltip, Checkbox } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import { useIntl } from '@/hooks';
import styled from 'styled-components';

import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

interface SettingKeys {
  key: string;
  show: boolean;
  fixed: 'left' | 'right' | boolean;
  disabled: boolean;
}

const getInitState = (data: ColumnsType) => {
  return data.map((item) => ({
    key: item.key,
    show: true,
    fixed: item.fixed || false,
  }));
};

const getDataKey = (data: ColumnsType) => data.map((item) => item.key);

const transColumns = (columns: ColumnsType, setting: SettingKeys[]) => {
  return columns.filter((item) => setting.some((ele) => ele.key === item.key));
};

export const useTableCustom = (columns: ColumnsType, uniqueKey: string, limit = 1) => {
  const [setting, setSetting] = useState<SettingKeys[]>([]);

  const { getLang } = useIntl();

  const select = getDataKey(setting);
  const allSelect = getInitState(columns) as SettingKeys[];
  const presetSelect = getInitState(columns).filter((item) =>
    /^(主场景因子|基础信息.测试场景|基础信息.数据路径|基础信息.JIRA单号|描述|preset)/.test(
      item.key as string
    )
  ) as SettingKeys[];

  const columnsSetting = useMemo(() => {
    return transColumns(columns, setting);
  }, [columns, setting]);

  const methods = {
    reset: () => {
      setSetting(presetSelect);
    },
    setAll: () => {
      setSetting(allSelect);
    },
    save: () => {
      if (setting.length <= limit) return;
      localStorage.setItem(uniqueKey, JSON.stringify(setting));
    },
  };

  const onChangeCall = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      methods.setAll();
    } else {
      setSetting(presetSelect.filter((item) => item.key === 'presetOption'));
    }
  };

  const selectChange = (keys: CheckboxValueType[]) => {
    const temp = allSelect.filter((item) => keys.includes(item.key as string));
    setSetting(temp as SettingKeys[]);
  };

  useEffect(() => {
    const originSetting = localStorage.getItem(uniqueKey);
    if (originSetting) {
      setSetting(JSON.parse(originSetting));
    } else {
      methods.reset();
    }
  }, [columns]);

  useEffect(() => {
    methods.save();
  }, [setting]);

  const SettingBtn = (
    <Popover
      arrowPointAtCenter
      title={
        <Header>
          <Checkbox
            indeterminate={!!select.length && select.length < columns.length}
            checked={select.length === columns.length}
            onChange={onChangeCall}
          >
            {getLang('common.option.selectAll')}
          </Checkbox>
          <a onClick={methods.reset}>{getLang('common.option.reset')}</a>
        </Header>
      }
      trigger='click'
      placement='bottomRight'
      content={
        <Content>
          <Checkbox.Group value={select as string[]} onChange={selectChange}>
            {columns.map((item) => (
              <div className='list' key={item.key}>
                <Checkbox value={item.key} disabled={item.key === 'presetOption'}>
                  {item.title}
                </Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Content>
      }
      getPopupContainer={(node) => node.parentNode as HTMLElement}
    >
      <Tooltip title={getLang('components.table.colummns.setting')}>
        <IconCon>
          <SettingOutlined />
        </IconCon>
      </Tooltip>
    </Popover>
  );

  return {
    columnsSetting,
    SettingBtn,
  };
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  white-space: pre;
  height: 400px;
  overflow-y: auto;
  .list {
    margin: 6px 0;
    .ant-checkbox-wrapper {
      display: flex;
    }
  }
`;

const IconCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  margin-left: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
