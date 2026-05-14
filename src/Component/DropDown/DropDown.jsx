"use client";
import {  ChevronDown } from "@gravity-ui/icons";
import { Button, Dropdown, Kbd, Label } from "@heroui/react";

const DropDown = () => {
    return (
        <div className="w-full grid grid-cols-3 my-8 px-3">

            <Dropdown className="">
                <Button aria-label="Menu" variant="" className={'w-full border rounded-none flex justify-between py-5 uppercase text-neutral-500'}>
                   Category
                    <ChevronDown/>
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                        <Dropdown.Item id="new" textValue="New">
                            <Label>New</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>N</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="open" textValue="Open">
                            <Label>Open</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>O</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="save" textValue="Save">
                            <Label>Save</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>S</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="delete" textValue="Delete" variant="danger">
                            <Label>Delete</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Abbr keyValue="shift" />
                                <Kbd.Content>D</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>




            <Dropdown>

                <Button aria-label="Menu" variant="" className={'w-full border rounded-none flex justify-between py-5 uppercase text-neutral-500'}>
                    Price Range
                    <ChevronDown/>
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                        <Dropdown.Item id="new" textValue="New">
                            <Label>New</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>N</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="open" textValue="Open">
                            <Label>Open</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>O</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="save" textValue="Save">
                            <Label>Save</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>S</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="delete" textValue="Delete" variant="danger">
                            <Label>Delete</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Abbr keyValue="shift" />
                                <Kbd.Content>D</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>




            <Dropdown>

                <Button aria-label="Menu" variant="" className={'w-full border rounded-none flex justify-between py-5 uppercase text-neutral-500'}>
                    SORT BY
                    <ChevronDown/>
                </Button>
                <Dropdown.Popover>
                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                        <Dropdown.Item id="new" textValue="New">
                            <Label>New</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>N</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="open" textValue="Open">
                            <Label>Open</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>O</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="save" textValue="Save">
                            <Label>Save</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Content>S</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                        <Dropdown.Item id="delete" textValue="Delete" variant="danger">
                            <Label>Delete</Label>
                            <Kbd className="ms-auto" slot="keyboard" variant="light">
                                <Kbd.Abbr keyValue="command" />
                                <Kbd.Abbr keyValue="shift" />
                                <Kbd.Content>D</Kbd.Content>
                            </Kbd>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
        </div>
    );
};

export default DropDown;